package com.example.burak.orderlist.Pages

import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v4.graphics.drawable.RoundedBitmapDrawableFactory
import android.support.v7.widget.DividerItemDecoration
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import com.example.burak.orderlist.Items.Profile_RvAdapter
import com.example.burak.orderlist.Items.ShoppingCart_RvAdapter
import com.example.burak.orderlist.R

class Profile : Fragment(), View.OnClickListener{

    companion object {
        val rvAdapter = Profile_RvAdapter(("").map {""}.toMutableList())
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val rootView = inflater.inflate(R.layout.page_profile, container, false)
        val profilepicture = rootView.findViewById<ImageView>(R.id.profile_picture)
        val recyclerview = rootView.findViewById(R.id.recyclerAddress) as RecyclerView
        val addAddress = rootView.findViewById<TextView>(R.id.addAddress)

        //recyclerview.addItemDecoration(DividerItemDecoration(activity, DividerItemDecoration.VERTICAL))
        recyclerview.layoutManager = LinearLayoutManager(activity)
        recyclerview.adapter = rvAdapter

        val img = BitmapFactory.decodeResource(resources, R.drawable.dummy_user_image)
        val round = RoundedBitmapDrawableFactory.create(resources, img)

        round.isCircular = true
        profilepicture.setImageDrawable(round)
        addAddress.setOnClickListener(this)

        return rootView
    }
    override fun onClick(v: View) {
        when (v.id) {
            R.id.addAddress -> {
                rvAdapter.addItem("New item")
            }
        }
    }
}
