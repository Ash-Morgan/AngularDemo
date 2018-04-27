package com.auction.server.services;

import com.auction.server.entities.BusinessInfo;
import com.auction.server.repositories.BusinessInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "business-info-service")
public class BusinessInfoService {
    @Resource(name = "business-info-repo", type = BusinessInfoRepo.class)
    private BusinessInfoRepo businessInfoRepo;


    /**
     * 更新交易信息
     * @param buyuserid
     * @param goodsid
     * @param bamount
     * @param payway
     * @return BusinessInfo
     */
    public BusinessInfo updateBusinessInfo(int buyuserid ,int goodsid ,double bamount ,String payway) {
        BusinessInfo businessInfo = businessInfoRepo.findByGoodsid(goodsid);
        businessInfo.setBuyuserid(buyuserid);
        businessInfo.setBamount(bamount);
        businessInfo.setPayway(payway);
        businessInfo.setBdate(getStringDateNow());
        return businessInfoRepo.save(businessInfo);
    }

    /**
     * 获取现在时间
     * @return 返回短时间字符串格式yyyy-MM-dd HH:mm:ss
     */
    public static String getStringDateNow() {
        Date currentTime = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateString = formatter.format(currentTime);
        return dateString;
    }
}
